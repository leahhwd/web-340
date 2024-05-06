const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const characterData = '{"class": "warrior", "gender": "female", "funfact": "hairy"}';

    characterCreator.on('data', (data) => {
      expect(data.toString()).toEqual('class: warrior\n gender: female\n funfact: hairy');
      done();
    });
    characterCreator.write(characterData);
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err.message). toBe("Invalid data");
      done();
    });
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const characterData = '{"class": "warrior", "gender": "female", "funfact": "smart"}';
    const expectedOutput = "class: warrior, gender: female, funfact: smart";

    characterCreator.write(characterData, 'utf8', () =>{
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });

  });
});