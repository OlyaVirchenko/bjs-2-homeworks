class AlarmClock {
	
	constructor() {
		this.alarmCollection = [];
		this.timerID = null;
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

		this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);

		return result.length != this.alarmCollection.length;

	}

	getCurrentFormattedTime() {

      return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
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
				this.alarmCollection.forEach((item) => checkClock(item))
			}, 1000)
		}
	}

	stop() {
		if (this.timerId !=== null) {
			clearInterval(this.timerId);
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
  let time = phoneAlaram.getCurrentFormattedTime();

  let timePlusMinute = (getHours() + ':' + (getMinutes() + 1))

  let timePlusTwoMinute = (getHours() + ':' + (getMinutes() + 2))

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


function getHours() {
  let hours = new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit"
  });
  return Number(hours);
}

function getMinutes() {
  let minutes = new Date().toLocaleTimeString("ru-Ru", {
    minute: "2-digit"
  });
  return Number(minutes);
}  

	phoneAlaram.printAlarms();
	phoneAlaram.start()
}























