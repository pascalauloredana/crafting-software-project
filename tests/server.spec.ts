import { reconstruct } from '../reconstruct';

describe('Test reconstruct function', function() {
	it('should return [\'the\', \'quick\', \'brown\', \'fox\']', function() {
		expect(reconstruct(
			['quick', 'brown', 'the', 'fox'],
			'thequickbrownfox'
		)).toEqual(['the', 'quick', 'brown', 'fox']);
	});

	it('should return [\'bedbath\', \'and\', \'beyond\']', function() {
		expect(reconstruct(
			["bed", "bath", "bedbath", "and", "beyond"],
			'bedbathandbeyond'
		)).toEqual(['bed', 'bath', 'and', 'beyond']);
	});

	it('should return [\'the\', \'quick\', \'brown\', \'fox\']', function() {
		expect(reconstruct(
			['quick', 'brown', 'the', 'fox'],
			'thequickfoxbrownfox'
		)).toEqual(['the', 'quick', 'fox','brown', 'fox']);
	});

	it('should return []', function() {
		expect(reconstruct(
			['quick', 'brown', 'the', 'fox'],
			'anaaremere'
		)).toEqual([]);
	});
});