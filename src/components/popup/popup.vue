<script>
import Base from "../../base/base.vue";
import {
    getDefaultPositions, getBestPosition, getRect, getElement, toRect
} from "./popup-helper.js";

export default {
    extends: Base,

    props: {

        target: {
            type: [String, Object],
            default: ""
        },

        bindTarget: {
            type: Boolean,
            default: false
        },

        positions: {
            type: [String, Array],
            default: () => {
                return getDefaultPositions();
            }
        },

        attachToBody: {
            type: Boolean,
            default: true
        },

        container: {
            type: [String, Object, Document, Window],
            default: ""
        }

    },

    methods: {
        getDefaultPositions,
        getBestPosition,
        getRect,
        getElement,
        toRect
    }

};
</script>
<style lang="scss">
.lui-popup {
    position: relative;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 6px;

    &::after {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background-image: url(./popup-arrow.svg);
        background-repeat: no-repeat;
        z-index: 1;
    }

    &.lui-popup-bottom-right {
        border-top-left-radius: 0;

        &::after {
            background-position: -9px 0;
            top: -9px;
            left: -1px;
        }
    }

    &.lui-popup-bottom-center {
        &::after {
            width: 18px;
            background-position: -18px 0;
            top: -9px;
            left: calc(50% - 9px);
        }
    }

    &.lui-popup-bottom-left {
        border-top-right-radius: 0;

        &::after {
            background-position: -36px 0;
            top: -9px;
            left: calc(100% - 8px);
        }
    }

    &.lui-popup-left-bottom {
        border-top-right-radius: 0;

        &::after {
            background-position: -45px -9px;
            top: -1px;
            left: 100%;
        }
    }

    &.lui-popup-left-center {
        &::after {
            height: 18px;
            background-position: -45px -18px;
            top: calc(50% - 9px);
            left: 100%;
        }
    }

    &.lui-popup-left-top {
        border-bottom-right-radius: 0;

        &::after {
            background-position: -45px -36px;
            top: calc(100% - 8px);
            left: 100%;
        }
    }

    &.lui-popup-top-left {
        border-bottom-right-radius: 0;

        &::after {
            background-position: -36px -45px;
            top: 100%;
            left: calc(100% - 8px);
        }
    }

    &.lui-popup-top-center {
        &::after {
            width: 18px;
            background-position: -18px -45px;
            top: 100%;
            left: calc(50% - 9px);
        }
    }

    &.lui-popup-top-right {
        border-bottom-left-radius: 0;

        &::after {
            background-position: -9px -45px;
            top: 100%;
            left: -1px;
        }
    }

    &.lui-popup-right-top {
        border-bottom-left-radius: 0;

        &::after {
            background-position: 0 -36px;
            top: calc(100% - 8px);
            left: -9px;
        }
    }

    &.lui-popup-right-center {
        &::after {
            height: 18px;
            background-position: 0 -18px;
            top: calc(50% - 9px);
            left: -9px;
        }
    }

    &.lui-popup-right-bottom {
        border-top-left-radius: 0;

        &::after {
            background-position: 0 -9px;
            top: -1px;
            left: -9px;
        }
    }
}
</style>