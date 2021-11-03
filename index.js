const refs = {
    fieldDays: document.querySelector('[data-value="days"]'),
    fieldHours: document.querySelector('[data-value="hours"]'),
    fieldMins: document.querySelector('[data-value="mins"]'),
    fieldSecs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }
    start() {
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now();
            const time = this.getTimeComponents(deltaTime);
            this.updateClockface(time);
        }, 1000);
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, mins, secs}
    }
    updateClockface({ days, hours, mins, secs }) {
        refs.fieldDays.textContent = days;
        refs.fieldHours.textContent = hours;
        refs.fieldMins.textContent = mins;
        refs.fieldSecs.textContent = secs;

    }
}
    const timer = new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('Jan 01, 2022'),
    });
   