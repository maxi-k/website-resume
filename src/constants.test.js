import constants from 'constants.json';

it('Provides several important constants', () => {
    expect(constants.person.name).toEqual("Maximilian Kuschewski");
});
