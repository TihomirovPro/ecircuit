function bubblesSlider () {
  const SCROLL_SPEED = 0.3
  const CANVAS_WIDTH = 2060

  const bubblesEl = document.querySelector('.bubbles')
  const bubbleSpecs = [
    {
      s: 0.7, // 1 google
      x: 0,
      y: 54
    },
    {
      s: 1, // 2 hh
      x: 105,
      y: 182
    },
    {
      s: 0.5, // 3 ea
      x: 193,
      y: 18
    },
    {
      s: 0.5, // 4 insta
      x: 338,
      y: 168
    },
    {
      s: 0.7, // 5 lg
      x: 424,
      y: 36
    },
    {
      s: 1, // 6 yandex 
      x: 522,
      y: 202
    },
    {
      s: 0.5, // 7 insta 
      x: 603,
      y: 67
    },
    {
      s: 0.5, // 8 lg
      x: 751,
      y: 236
    },
    {
      s: 0.7, // 9 hm
      x: 784,
      y: 36
    },
    {
      s: 0.7, // 10 google
      x: 914,
      y: 186
    },
    {
      s: 0.5, // 11 ea
      x: 963,
      y: 0
    },
    // ==================== //
    {
      s: 0.7, // 1 google
      x: 1060,
      y: 54
    },
    {
      s: 1, // 2 hh
      x: 105 + 1030,
      y: 182
    },
    {
      s: 0.5, // 3 ea
      x: 193 + 1030,
      y: 18
    },
    {
      s: 0.5, // 4 insta
      x: 338 + 1030,
      y: 168
    },
    {
      s: 0.7, // 5 lg
      x: 424 + 1030,
      y: 36
    },
    {
      s: 1, // 6 yandex 
      x: 522 + 1030,
      y: 202
    },
    {
      s: 0.5, // 7 insta 
      x: 603 + 1030,
      y: 67
    },
    {
      s: 0.5, // 8 lg
      x: 751 + 1030,
      y: 236
    },
    {
      s: 0.7, // 9 hm
      x: 784 + 1030,
      y: 36
    },
    {
      s: 0.7, // 10 google
      x: 914 + 1030,
      y: 186
    },
    {
      s: 0.5, // 11 ea
      x: 963 + 1030,
      y: 0
    }
  ]

  class Bubbles {
    constructor (specs) {
      this.bubbles = []

      specs.forEach((spec, index) => {
        this.bubbles.push(new Bubble(index, spec))
      })

      requestAnimationFrame(this.update.bind(this))
    }

    update () {
      this.bubbles.forEach(bubble => bubble.update())
      this.raf = requestAnimationFrame(this.update.bind(this))
    }
  }

  class Bubble {
    constructor (index, {
      x,
      y,
      s = 1
    }) {
      this.index = index
      this.x = x
      this.y = y
      this.scale = s

      this.el = document.createElement("div")
      this.el.className = `bubble logo${this.index + 1}`
      bubblesEl.appendChild(this.el)
    }

    update () {
      this.x = (this.x < -200) ? CANVAS_WIDTH : this.x - SCROLL_SPEED
      this.el.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`
    }
  }

  const bubbles = new Bubbles(bubbleSpecs)

}

bubblesSlider()
