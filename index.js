/* Your Code Here */

let createEmployeeRecord = function (employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

function createEmployeeRecords(newEmployees) {
  return newEmployees.map(createEmployeeRecord);
}

const getHour = function (dateTime) {
  return parseInt(dateTime.match(/\d{4}$/)[0]);
};

const getDate = function (dateTime) {
  return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0];
};

function createTimeInEvent(timeIn) {
  this.timeInEvents.push({
    type: "TimeIn",
    date: getDate(timeIn),
    hour: getHour(timeIn),
  });
  return this;
}

function createTimeOutEvent(timeOut) {
  this.timeOutEvents.push({
    type: "TimeOut",
    date: getDate(timeOut),
    hour: getHour(timeOut),
  });
  return this;
}
function hoursWorkedOnDate(dateProvided) {
  let timeIn = this.timeInEvents.find(
    (event) => event.date == dateProvided
  );
  let timeOut = this.timeOutEvents.find(
    (event) => event.date == dateProvided
  );
  let totalTime = (timeOut.hour - timeIn.hour) / 100;
  return totalTime;
}
function wagesEarnedOnDate(dateProvided) {
  let hours = hoursWorkedOnDate.call(this, dateProvided);
  return this.payPerHour * hours;
}
function findEmployeeByFirstName(allEmployees, name) {    
    return allEmployees.find(employee => employee.firstName == name)
}
function calculatePayroll(employeeRecord) {
  return employeeRecord.reduce((total, employee) => {
    return total + allWagesFor.call(employee);
  }, 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
