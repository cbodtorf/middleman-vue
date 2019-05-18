<template>
  <span class="scrambled">{{tweenedValue}}</span>
</template>

<script>
export default {
    name: 'TextScrambler',
    data () {
        return {
            queue: [],
            tweenedValue: ''
        }
    },
    watch: {
        text (newValue, oldValue) {
            this.setText(`${oldValue}`, `${newValue}`)
        }
    },
    mounted () {
        if (this.disableInitialScramble) {
            this.tweenedValue = `${this.text}`
        } else {
            this.setText(this.tweenedValue, `${this.text}`)
        }
    },
    props: {
        text: String,
        disableInitialScramble: Boolean,
        scrambleDuration: {
            type: Number,
            default: 20
        },
        scrambleCharacterSet: {
            type: String,
            default: 'abcdefghijklmnopqrstuvwrxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    },
    methods: {
        setText (oldText, newText) {
            const length = Math.max(oldText.length, newText.length)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * this.scrambleDuration)
                const end =
                    start + Math.floor(Math.random() * this.scrambleDuration)
                this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
        },
        randomChar () {
            return this.text[Math.floor(Math.random() * this.text.length)]
        },
        update () {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += char
                } else {
                    output += from
                }
            }
            this.tweenedValue = output
            if (complete !== this.queue.length) {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        }
    }
}
</script>
