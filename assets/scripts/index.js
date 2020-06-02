const writingText = document.querySelector("#writing-text");

Typed.new('#writing-text', {
    strings: [
        'I am a Full-stack Web Developer!^1000',
        'i love to try and learn new things.^1000',
        'specially frontend.^1000',
        'happy coding!'
    ],
    typeSpeed: 40,
    callback: function () {
        writingText.style.color = '#ffff';
        writingText.style.background = '#4299e1';
    },
})
