import ReactTestUtils from 'react-dom/test-utils';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';

const calendarDriverFactory = ({ element }) => {
  const getCalendar = () => element.querySelector('.DayPicker');
  const getNthDay = n =>
    element.querySelectorAll(
      '[role="gridcell"]:not([class*="outside"]):not([class*="disabled"])',
    )[n];
  const getNthDayOfTheMonth = n =>
    element.querySelectorAll('[role="gridcell"]:not([class*="outside"])')[n];
  const getDayOfDate = (year, month, day) =>
    element.querySelector(
      `[role="gridcell"]:not([class*="outside"])>[data-date='${year}-${month}-${day}']`,
    );
  const getSelectedDay = () =>
    element.querySelector(
      '[role="gridcell"][aria-selected=true]:not(.DayPicker-Day--outside)',
    );
  const getYearDropdown = () =>
    element.querySelector('[data-hook="datepicker-year-dropdown-button"]');
  const getMonthDropdownButton = () =>
    element.querySelector('[data-hook="datepicker-month-dropdown-button"]');
  const getNthYear = n =>
    element.querySelector(`[data-hook="dropdown-item-${n}"]`);
  const getMonthCaption = () =>
    element.querySelector('[data-hook="datepicker-month-caption"]');
  const getYearCaption = () =>
    element.querySelector('[data-hook="datepicker-year-caption"]');
  const getMonthAndYear = () => [getMonthCaption(), getYearCaption()];
  const getNthWeekDayName = n =>
    element.querySelectorAll('[class="DayPicker-Weekday"] abbr')[n];
  const getPrevMonthButton = () =>
    element.querySelector('[data-hook="datepicker-left-arrow"]');
  const getNextMonthButton = () =>
    element.querySelector('[data-hook="datepicker-right-arrow"]');
  const getFocusedDay = () => element.querySelector('.DayPicker-Day:focus');
  const getVisuallyUnfocusedDay = () =>
    element.querySelector('.DayPicker-Day--unfocused');
  const getMonthContainers = () => element.querySelectorAll('.DayPicker-Month');
  const getVisibleMonths = () =>
    element.querySelectorAll('[class="DayPicker-Month"]');
  const getSelectedDays = () =>
    element.querySelectorAll(
      '[role="gridcell"][aria-selected=true]:not(.DayPicker-Day--outside)',
    );

  const driver = {
    exists: () => !!element,
    close: () =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), {
        key: 'Escape',
        keyCode: 27,
      }),
    isVisible: () => !!getCalendar(),
    getCurrentMonthWithYear: () =>
      getMonthAndYear()
        ? getMonthAndYear()
            .map(elm => elm.textContent)
            .join(' ')
        : '',
    getNthWeekDayName: (n = 0) =>
      getNthWeekDayName(n) ? getNthWeekDayName(n).textContent : '',
    clickOnNthDay: (n = 0) =>
      getNthDay(n) && ReactTestUtils.Simulate.click(getNthDay(n)),
    clickDay: date => {
      const day = getDayOfDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
      if (day) {
        ReactTestUtils.Simulate.click(day);
      } else {
        throw new Error(
          `ERROR: CalendarDriver.clickDay() - The given date (${date.toString()}) is not visible`,
        );
      }
    },
    clickOnNthDayOfTheMonth: (n = 0) =>
      getNthDayOfTheMonth(n) &&
      ReactTestUtils.Simulate.click(getNthDayOfTheMonth(n)),
    clickOnSelectedDay: () => ReactTestUtils.Simulate.click(getSelectedDay()),
    clickOnYearDropdown: () => ReactTestUtils.Simulate.click(getYearDropdown()),
    clickOnMonthDropdown: () =>
      ReactTestUtils.Simulate.click(getMonthDropdownButton()),
    clickOnNthYear: (n = 1) => ReactTestUtils.Simulate.mouseDown(getNthYear(n)),
    clickOnPrevMonthButton: () =>
      ReactTestUtils.Simulate.click(getPrevMonthButton()),
    clickOnNextMonthButton: () =>
      ReactTestUtils.Simulate.click(getNextMonthButton()),
    isHeaderVisible: () =>
      !!element.querySelector('[data-hook="datepicker-head"]'),
    isYearDropdownExists: () =>
      !!element.querySelector('[data-hook="datepicker-year-dropdown"]'),
    isYearCaptionExists: () => !!getYearCaption(),
    isMonthDropdownExists: () =>
      !!element.querySelector('[data-hook="datepicker-month-dropdown"]'),
    isMonthCaptionExists: () => !!getMonthCaption(),
    getMonthCaption: () => getMonthCaption().textContent,
    getMonthDropdownLabel: () => getMonthDropdownButton().textContent,
    getSelectedYear: () => getYearDropdown().textContent,
    /** Returns the text of the focused day or `null` if there is no focused day */
    getFocusedDay: () => {
      const focusedDayElement = getFocusedDay();
      return !!focusedDayElement ? focusedDayElement.textContent : null;
    },
    getFocusedDayElement: () => getFocusedDay(),
    pressLeftArrow: () =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), {
        key: 'ArrowLeft',
        keyCode: 37,
      }),
    pressRightArrow: () =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), {
        key: 'ArrowRight',
        keyCode: 39,
      }),
    getSelectedDay: () => getSelectedDay().textContent,
    getWidth: () => element.style.width,
    triggerKeyDown: params =>
      ReactTestUtils.Simulate.keyDown(getFocusedDay(), params),
    isFocusedDayVisuallyUnfocused: () =>
      getFocusedDay().classList.contains('DayPicker-Day--unfocused'),
    containsVisuallyUnfocusedDay: () => !!getVisuallyUnfocusedDay(),
    isTwoMonthsLayout: () => getMonthContainers().length === 2,

    getMonthDropdownDriver: () => {
      ReactTestUtils.Simulate.click(
        element.querySelector('[data-hook="datepicker-month-dropdown-button"]'),
      );

      return dropdownLayoutDriverFactory({
        element: element.querySelector(
          '[data-hook="datepicker-month-dropdown-menu"]',
        ),
      });
    },

    getYearDropdownDriver: () => {
      ReactTestUtils.Simulate.click(
        element.querySelector('[data-hook="datepicker-year-dropdown-button"]'),
      );

      return dropdownLayoutDriverFactory({
        element: element.querySelector(
          '[data-hook="datepicker-year-dropdown-menu"]',
        ),
      });
    },
    getNumOfVisibleMonths: () => getVisibleMonths().length,
    getNumOfSelectedDays: () => getSelectedDays().length,
    getSelectedDays: () => {
      const result = [];
      getSelectedDays().forEach(item => {
        const date = item.childNodes[0]
          .getAttribute('data-date')
          .split('-')
          .map(item => parseInt(item));
        result.push(new Date(date[0], date[1], date[2]));
      });
      return result;
    },

    mouseClickOutside: () =>
      document.body.dispatchEvent(new Event('mouseup', { cancelable: true })),
  };

  return driver;
};

export default calendarDriverFactory;
