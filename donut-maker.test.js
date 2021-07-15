import DonutMaker from "./DonutMaker";

describe('The creation of DonnutMaker', () => {
    test('Does it add a donut?', () => {
        const underTest = new DonutMaker(0, 0,0);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1)
    });

    test('Can it purchase an autoclicker and remover spent donuts?', ()=>{
        const underTest = new DonutMaker(100,0,0);
        underTest.addAutoClicker();
        expect(underTest.numAutoClickers).toEqual(1);
        expect(underTest.numDonuts).toEqual(0);
    });

    test('Should not allow auto clicker purchase with 99 donuts', () => {
        const underTest = new DonutMaker(99,0,0);
        underTest.addAutoClicker();
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test('Will add donuts increase by the amount of autoclickers present when its fired', () => {
        const underTest = new DonutMaker(110,2,0);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(112);
    });

    test('Should be able to purchase donut mulitplier with 10 clicks', () => {
        const underTest = new DonutMaker(10,0,0);
        underTest.addDonutMultiplier();
        expect(underTest.numDonutMultiplier).toEqual(1);
    })
});
