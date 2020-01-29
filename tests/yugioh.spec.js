const expect = require('chai').expect;
const yuGiOhApi = require('../YuGiOhApiV5/YuGiOhApi');

describe('Yu-gi-oh card infos', function () {

  this.timeout(10000);

  beforeEach(() => {

  });

  afterEach(() => {

  });

  it('Verifies the exact name of a card querying by the exact name', async () => {
    const card = await yuGiOhApi.cardInfo.getCardByName('Tornado Dragon');
    expect(card.name).to.eq('Tornado Dragon');
  });

  it('Verifies the name of a card querying by ID', async () => {
    const card = await yuGiOhApi.cardInfo.getCardByName(6983839);
    expect(card.name).to.eq('Tornado Dragon');
  });

  it('Verifies Twin-Headed Thunder Dragon is returned when querying by name like Twin-Headed', async () => {
    const cards = await yuGiOhApi.cardInfo.getCardsByNameLike('Twin-Headed');
    expect(cards.find(card => card.name === 'Twin-Headed Thunder Dragon')).to.include({
      name: 'Twin-Headed Thunder Dragon'
    });
  });

  it('Verifies there are 8 cards with Attack greater or equal to 5000', async () => {
    const cards = await yuGiOhApi.cardInfo.getCardsWithAttackMoreOrEqualThan(5000);
    expect(cards).to.have.lengthOf(8);
  });

  it('Verifies Twin-Headed Thunder Dragon is in Thunder race list cards', async () => {
    const cards = await yuGiOhApi.cardInfo.getCardsByRace('Thunder');
    expect(cards.find(card => card.name === 'Twin-Headed Thunder Dragon')).to.include({
      name: 'Twin-Headed Thunder Dragon'
    });
  });

  it.skip('Verifies the set Crossroads of Chaos: Special Edition is present in sets database', async () => {
    const cardSets = await yuGiOhApi.cardSet.getCardSets();
    expect(cardSets.find(cardSet => cardSet['Set Name'] === 'Crossroads of Chaos: Special Edition')).to.include({
      'Set Name': 'Crossroads of Chaos: Special Edition'
    });
  });
});
