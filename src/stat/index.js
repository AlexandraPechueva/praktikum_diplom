import '../pages/stat.css';
import DataStorage from '../js/modules/DataStorage';
import Statistics from '../js/components/Statistics';

const dataStorage = new DataStorage();
const searchedResult = dataStorage.getData("key");
const searchedText = dataStorage.getData("word").toLowerCase();

const stat = new Statistics(searchedResult, searchedText);

const statTitle = document.querySelector('.stat-text__title');
const weekAmount = document.getElementById('week-amount');
const titleAmount = document.getElementById('title-amount');
const bars = Array.from(document.querySelectorAll('.chart__bar'));
const days = Array.from(document.querySelectorAll('.chart__date'));

statTitle.textContent = `Вы искали: ${searchedText}`;
weekAmount.textContent = searchedResult.totalResults;

const counter = stat.getAmountByDays();

titleAmount.textContent = stat.getTotalTitleAmount(counter);

stat.getBars(counter, bars);
stat.getDays(counter, days);
