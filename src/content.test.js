import { getContent, translate } from './content';

it("translates given keys correctly", () => {
    expect(translate('en', 'title')).toEqual('Resume');
    expect(translate('de', 'title')).toEqual('Lebenslauf');
});

it("returns static content correctly", () => {
    expect(getContent('person.name')).toEqual('Maximilian Kuschewski');
    expect(getContent('undefined.stuff')).toEqual(undefined);
});
