class AlarmClock {
	
	constructor(alarmCollection = [], timerID = null) {
		this.alarmCollection = alarmCollection;
		this.timerId = timerID;
	}

	addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('error text')
      }

      if (this.alarmCollection.find(item => item.id === id)) {
      	console.error('Будильник на указанное время уже установлен');
      	return;
      }

      this.alarmCollection.push({id, time, callback})
	}

	removeClock(id) {
		const result = this.alarmCollection

		this.alarmCollection = this.alarmCollection.filter(item.id !== id);

		return result.length != this.alarmCollection.length;

	}

	getCurrentFormattedTime() {
		const currentDate = new Date;
		const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

		return hours + ':' + minutes
	}

	start() {
		function checkClock(alarm){
			if (alarm.time === this.getCurrentFormattedTime()){
				alarm.callback();
			}
		}

		checkClock = checkClock.bind(this);

		if (timerId === null) {
			this.timerId = setInterval(() => {
				(this.alarmCollection.forEach((item) => checkClock(item)))
			}, 1000)
		}
	}

	stop() {
		if (this.timerId !=== null) {
			this.timerId.clearInterval();
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log(`Напечатать ${this.alarmCollection.length} будильников`);
		this.alarmCollection.forEach((item) => console.log(`Будильник ${item.id} заведен на ${item.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

function testCase() {
	let phoneAlaram = new AlarmClock();
    let time = getCurrentFormattedTime()

    let timePlusMinute = (hours + ':' + (minutes + 1))

    et timePlusTwoMinute = (hours + ':' + (minutes + 2))

	phoneAlarm.addClock(time, () => console.log('Пора вставать'), 1)

	phoneAlarm.addClock(timePlusMinute, () => {
		console.log('Всё еще пора вставать'); 
		phoneAlaram.removeClock()}, 2 )

	phoneAlarm.addClock(timePlusTwoMinute, () => {
		console.log('Ну вставай же');
		phoneAlaram.stop();
		phoneAlaram.clearAlarms();
		phoneAlaram.printAlarms();
	}, 3)

	phoneAlaram.printAlarms();
	phoneAlaram.start()
}























