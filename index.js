const regex = /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/gu;

const testCases = [
	"👨‍👩‍👧‍👦",
	"👨‍👩‍👧‍👦test❤️test💜",
	"test💜",
	"❤️",
	"❤",
	"♥",
	"🖤",
	"💜",
	"foo🙂👪👪👩🏻‍🦰👩🏻👩‍🦰bar",
	"flowers 🌼🌺🌸",
	"flowers 123",
	"test",
	"123",
	"äö",
	"Aila Lind-Mäki",
	"Marko Rytkönen",
	"Tuomas Änäkkälä"
];

for (const testCase of testCases) {
	// use .match instead of .test here, 'cause the last one has a lot of unexpected result with emoji
	// to make sure, just replace the row from
	// !!testCase.match(regex)
	// to
	// regex.test(testCase)
	console.log(testCase, !!testCase.match(regex));
}
