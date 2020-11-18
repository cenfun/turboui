const toNum = (num) => {
    if (typeof(num) !== "number") {
        num = parseFloat(num);
    }
    if (isNaN(num)) {
        num = 0;
    }
    num = Math.round(num);
    return num;
};

const isWindow = (obj) => {
    return !!(obj && obj === obj.window);
};

const isDocument = (obj) => {
    return !!(obj && obj.nodeType === 9);
};

const isElement = (obj) => {
    return !!(obj && obj.nodeType === 1);
};

export const toRect = (obj) => {
    if (obj) {
        return {
            left: toNum(obj.left),
            top: toNum(obj.top),
            width: toNum(obj.width),
            height: toNum(obj.height)
        };
    }
    return {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };
};

export const getElement = (selector) => {
    if (typeof selector !== "string") {
        if (isDocument(selector)) {
            return selector.body;
        }
        if (isElement(selector)) {
            return selector;
        }
        return;
    }
    if (selector.substr(0, 1) === "#") {
        try {
            return document.getElementById(selector.substr(1));
        } catch (e) {
        }
    }
    try {
        return document.querySelector(selector);
    } catch (e) {
    }
};

export const getRect = (target) => {
    if (!target) {
        return toRect();
    }

    if (isWindow(target)) {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    const elem = getElement(target);
    if (!elem) {
        return toRect(target);
    }

    const br = elem.getBoundingClientRect();
    const rect = toRect(br);

    //fix offset
    rect.left += window.pageXOffset;
    rect.top += window.pageYOffset;
    rect.width = elem.offsetWidth;
    rect.height = elem.offsetHeight;
    
    //console.log(elem.tagName, rect);
    
    return rect;
};

//===========================================================================================

export const defaultPositions = {

    "bottom-center": {
        direction: "h",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = containerRect.height - targetRect.top - targetRect.height - rect.height;
            info.top = targetRect.top + targetRect.height;
            info.left = Math.round(targetRect.left + targetRect.width * 0.5 - rect.width * 0.5);
        }
    },

    "bottom-right": {
        direction: "h",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = containerRect.height - targetRect.top - targetRect.height - rect.height;
            info.top = targetRect.top + targetRect.height;
            info.left = Math.round(targetRect.left + targetRect.width * 0.5);
        }
    },

    "bottom-left": {
        direction: "h",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = containerRect.height - targetRect.top - targetRect.height - rect.height;
            info.top = targetRect.top + targetRect.height;
            info.left = Math.round(targetRect.left + targetRect.width * 0.5 - rect.width);
        }
    },

    //===========================================================================================

    "right-center": {
        direction: "v",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = containerRect.width - targetRect.left - targetRect.width - rect.width;
            info.top = Math.round(targetRect.top + targetRect.height * 0.5 - rect.height * 0.5);
            info.left = targetRect.left + targetRect.width;
        }
    },

    "right-bottom": {
        direction: "v",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = containerRect.width - targetRect.left - targetRect.width - rect.width;
            info.top = Math.round(targetRect.top + targetRect.height * 0.5);
            info.left = targetRect.left + targetRect.width;
        }
    },

    "right-top": {
        direction: "v",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = containerRect.width - targetRect.left - targetRect.width - rect.width;
            info.top = Math.round(targetRect.top + targetRect.height * 0.5 - rect.height);
            info.left = targetRect.left + targetRect.width;
        }
    },

    //===========================================================================================

    "top-center": {
        direction: "h",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = targetRect.top - rect.height;
            info.top = targetRect.top - rect.height;
            info.left = Math.round(targetRect.left + targetRect.width * 0.5 - rect.width * 0.5);
        }
    },

    "top-right": {
        direction: "h",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = targetRect.top - rect.height;
            info.top = targetRect.top - rect.height;
            info.left = Math.round(targetRect.left + targetRect.width * 0.5);
        }
    },

    "top-left": {
        direction: "h",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = targetRect.top - rect.height;
            info.top = targetRect.top - rect.height;
            info.left = Math.round(targetRect.left + targetRect.width * 0.5 - rect.width);
        }
    },

    //===========================================================================================

    "left-center": {
        direction: "v",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = targetRect.left - rect.width;
            info.top = Math.round(targetRect.top + targetRect.height * 0.5 - rect.height * 0.5);
            info.left = targetRect.left - rect.width;
        }
    },

    "left-bottom": {
        direction: "v",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = targetRect.left - rect.width;
            info.top = Math.round(targetRect.top + targetRect.height * 0.5);
            info.left = targetRect.left - rect.width;
        }
    },
    
    "left-top": {
        direction: "v",
        calculate: (info, containerRect, targetRect, rect) => {
            info.spacePosition = targetRect.left - rect.width;
            info.top = Math.round(targetRect.top + targetRect.height * 0.5 - rect.height);
            info.left = targetRect.left - rect.width;
        }
    }
};

export const getDefaultPositions = () => {
    return Object.keys(defaultPositions);
};

//===========================================================================================

const getSpaceAlign = (containerStart, containerSize, start, size) => {
    const s = start - containerStart;
    const e = (containerStart + containerSize) - (start + size);
    return Math.min(s, e);
};

const calculateSpace = (info, containerRect) => {
    if (info.direction === "h") {
        info.spaceAlign += getSpaceAlign(containerRect.left, containerRect.width, info.left, info.width);
    } else {
        info.spaceAlign += getSpaceAlign(containerRect.top, containerRect.height, info.top, info.height);
    }
    info.space = Math.min(info.spacePosition, info.spaceAlign);
    return info;
};

const calculatePriority = (info) => {
    if (info.spacePosition >= 0) {
        info.priority += 1;
    }
    if (info.spaceAlign >= 0) {
        info.priority += 1;
    }
    return info;
};

const calculateChange = (info, previousInfo) => {
    if (!previousInfo) {
        return info;
    }
    //no change if type no change with previous 
    if (info.type === previousInfo.type) {
        return info;
    }
    const ax = info.left + info.width * 0.5;
    const ay = info.top + info.height * 0.5;
    const bx = previousInfo.left + previousInfo.width * 0.5;
    const by = previousInfo.top + previousInfo.height * 0.5;
    const dx = Math.abs(ax - bx);
    const dy = Math.abs(ay - by);
    info.change = Math.round(Math.sqrt(dx * dx + dy * dy));
    return info;
};

const calculatePositionInfo = (defaultInfo, index, type, containerRect, targetRect, rect, previousInfo) => {
    const [position, align] = type.split("-");
    let info = {
        ... defaultInfo,
        type,
        position,
        align,
        top: 0,
        left: 0,
        width: rect.width,
        height: rect.height,
        spacePosition: 0,
        spaceAlign: 0,
        priority: 0,
        change: 0,
        space: 0,
        index
    };
    info.calculate(info, containerRect, targetRect, rect);
    delete info.calculate;
    info = calculateSpace(info, containerRect);
    info = calculatePriority(info);
    info = calculateChange(info, previousInfo);
    return info;
};

const getTypeList = (positions, defaultList) => {
    if (!positions) {
        return;
    }
    if (!(positions instanceof Array)) {
        positions = [positions];
    }
    const map = {};
    positions.forEach(item => {
        item = (`${item}`).trim().toLowerCase();
        if (defaultPositions[item]) {
            map[item] = true;
            return;
        }
        if (!item) {
            return;
        }
        defaultList.forEach(pd => {
            if (pd.indexOf(item) !== -1) {
                map[pd] = true;
            }
        });
    });
    const list = Object.keys(map);
    if (!list.length) {
        return;
    }
    return list;
};

export const getBestPosition = (containerRect, targetRect, rect, positions, previousInfo) => {
    const defaultList = getDefaultPositions();
    let withDefaultPositions = false;
    let typeList = getTypeList(positions, defaultList);
    if (!typeList) {
        withDefaultPositions = true;
        typeList = defaultList;
    }

    const infoList = typeList.map((type, i) => {
        return calculatePositionInfo(defaultPositions[type], i, type, containerRect, targetRect, rect, previousInfo);
    });

    infoList.sort((a, b) => {
        if (a.priority !== b.priority) {
            return b.priority - a.priority;
        }
        if (previousInfo && a.priority === 2) {
            return a.change - b.change;
        }
        if (withDefaultPositions && a.space !== b.space) {
            return b.space - a.space;
        }
        return a.index - b.index;
    });

    //console.table(infoList);

    return infoList[0];
};