import Easycanvas from 'src/index.js';
import constants from 'karma/case.constant.js';

var $canvas = document.createElement('canvas');
$canvas.width = 888;
$canvas.height = 888;
document.body.appendChild($canvas);

var $Painter = new Easycanvas.painter();
$Painter.register($canvas);
$Painter.start();

var sprite1;

Easycanvas.imgLoader(constants.png30px, function (img) {
    sprite1 = $Painter.add({
        name: '0',
        content: {
            img: img,
        },
        style: {
            tx: 100, ty: 100,
            locate: 'lt',
            opacity: 0.5,
            rotate: 40,
        },
        events: {
            click: function () {
                console.log(3);
            }
        },

        children: [
            {
                name: '1',
                content: {
                    img: img,
                },
                style: {
                    tx: 500, ty: 0,
                    zIndex: 1,
                    opacity: 0.5,
                    locate: 'center',
                },
                events: {
                    eIndex: -3,
                    click: function () {
                        console.log(1);
                    }
                }
            },
            {
                name: '2',
                // inherit: ['opacity'],
                content: {
                    img: img,
                },
                style: {
                    tx: 0, ty: 500, // 实际100, 600
                    opacity: 1,
                    zIndex: 2,
                    locate: 'lt', // 原始中心115, 615
                    scale: 5 // 实际宽高150，x40～190，y540～690
                },
                events: {
                    eIndex: -31,
                    click: function () {
                        console.log(2);
                    }
                }
            },
            {
                name: '3',
                content: {
                    img: img,
                },
                style: {
                    tx: 500, ty: 500,
                    opacity: 0.7,
                    zIndex: 3,
                    locate: 'center',
                },
                events: {
                    eIndex: -31,
                    click: function () {
                        console.log(3);
                        this.style.opacity = 0;
                    }
                }
            },
        ],
    });
});

describe('Feature.rendering Test.', function () {
    it('Basic props inherit correctly.', function (done) {
        let getRenderStyle = function (props) {
            return [
                props.sx, props.sy, props.sw, props.sh,
                props.tx, props.ty, props.tw, props.th,
            ].join(',');
        };

        setTimeout(() => {
            $Painter.$children.forEach((i) => {
                console.log(i.$origin.name);
            });
            expect($Painter.$children.length).toBe(4);
            expect($Painter.$children[0].type).toBe('img');
            expect(getRenderStyle($Painter.$children[0].props)).toBe('0,0,30,30,100,100,30,30');
            expect($Painter.$children[3].settings.rotate).toBe(undefined);
            expect($Painter.$children[2].settings.rotate).toBe(undefined);
            expect(getRenderStyle($Painter.$children[2].props)).toBe('0,0,30,30,40,540,150,150');
            done();
        }, constants.waitForUpdateTime);
    });
});
