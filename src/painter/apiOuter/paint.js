/** ********** *
 *
 * Sort the sprite and call inner functions
 * - Will be called in each frame after the 'start' function called.
 *
 * ********** **/

import utils from 'utils/utils.js';

// var c = document.createElement('canvas');
// c.height = 1334;
// c.width = 750;
// var d = c.getContext('2d');

module.exports = function () {
    if (this.$pausing || (this.$inBrowser && document.hidden)) return;

    let $canvas = this;

    utils.execFuncs($canvas.hooks.beforeTick, $canvas, [$canvas.$rafTime]);

    if ($canvas.$paintContext.clearRect) {
        // d.globalAlpha = 0.3;
        // d.clearRect(0, 0, this.width, this.height);
        // d.globalAlpha = 0.7;
        // d.drawImage($canvas.$dom, 0,0);
        $canvas.$paintContext.clearRect(0, 0, this.width, this.height);
    }

    if (!$canvas.$freezing) {
        $canvas.$children = [];

        if (process.env.NODE_ENV !== 'production') {
            $canvas.$plugin.timeCollect($canvas, 'preprocessTimeSpend', 'START');
        }

        this.children.sort(function (a, b) {
            let za = utils.funcOrValue(a.style.zIndex, a);
            let zb = utils.funcOrValue(b.style.zIndex, b);
            if (za === zb) return 0;
            return za > zb ? 1 : -1;
        }).forEach(function (perItem, index) {
            $canvas.$perPaint(perItem, index);
        });

        if (process.env.NODE_ENV !== 'production') {
            $canvas.$plugin.timeCollect($canvas, 'preprocessTimeSpend', 'END');
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        $canvas.$plugin.timeCollect($canvas, 'paintTimeSpend', 'START');
    }

    $canvas.$render();
        // $canvas.$paintContext.globalAlpha = 0.3;
        // $canvas.$paintContext.drawImage(c,0,0);
        // $canvas.$paintContext.globalAlpha = 1;

    if (process.env.NODE_ENV !== 'production') {
        $canvas.$plugin.timeCollect($canvas, 'paintTimeSpend', 'END');
    }

    utils.execFuncs($canvas.hooks.ticked, $canvas, [$canvas.$rafTime]);

    if ($canvas.hooks.nextTick) {
        utils.execFuncs($canvas.hooks.nextTick, $canvas, [$canvas.$rafTime]);
        delete $canvas.hooks.nextTick;
    }
};
