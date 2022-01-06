describe("shout(string))", function () {
    it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
 });
});

function shout(string) {
    return string.toUpperCase()
}

describe("whisper(string))", function () {
    it("receives one argument and returns it in all lowercase", function () {
    expect(whisper("HELLO")).toEqual("hello");
 });
});

function whisper(string) {
    return string.toLowerCase()
}

describe("logShout(string))", function () {
    it("receives one argument and returns it in all caps", function () {
    expect(logShout("hello")).toEqual("HELLO");
 });
});

function logShout(string) {
    console.log(string.toUpperCase())
}

describe("logWhisper(string))", function () {
    it("receives one argument and returns it in all lowercase", function () {
    expect(logWhisper("hello")).toEqual("HELLO");
 });
});

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {


if (string === string.toLowerCase()) {   
    return "I can't hear you!";
    }

    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}