export class TwoCrystalBalls {
    private breaks: boolean[];
    private i: number;

    constructor(breaks: boolean[]) {
        this.breaks = breaks;
        this.i = 0;
    }

    public two_crystal_balls(): number {
        const jumpAmount = Math.floor(Math.sqrt(this.breaks.length));

        this.i = jumpAmount;
        for(; this.i < this.breaks.length; this.i += jumpAmount) {
            if (this.breaks[this.i]) {
                break;
            }
        }

        this.i -= jumpAmount;


        for (let j = 0; j <= jumpAmount && this.i < this.breaks.length; ++j, ++this.i) {
            if (this.breaks[this.i]) {
                return this.i;
            }
        }

        return -1;
    }
}
