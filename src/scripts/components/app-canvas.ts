import CustomComponent from "../shared/components/custom-component";

const tmpl = `
    <style>
        #game {
            border: 1px solid #c0c0c0;
            margin-top: 10px;
        }
    </style>
    <section>
        <canvas id="game" style="display: block;">Your browser does not support canvas! Please update your browser or download Google Chrome!</canvas>
    </section>
`

export default class AppCanvas extends CustomComponent {
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    constructor() {
        super(tmpl);
    }

    public connectedCallback(): void {
        this.initCanvas();
    }

    private initCanvas(): void {
        this.canvas = this.shadowRoot.querySelector('#game');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = 500;
    }
}