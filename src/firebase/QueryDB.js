import brothers from '../data/brothers.json';
import officers from '../data/officers.json';

let classMap = {};
let yearMap = {};
let nameMap = {};
let classes = ["Psi","Chi","Phi", "Upsilon", "Tau", "Sigma", "Rho", "Pi", "Omicron", "Xi", "Nu", "Mu", "Lambda", "Kappa", "Iota", "Theta", "Eta", "Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"];
let years = ["Class of 2028", "Class of 2027", "Class of 2026", "Class of 2025", "Class of 2024", "Class of 2023", "Class of 2022", "Class of 2021", "Class of 2020", "Class of 2019", "Class of 2018", "Class of 2017", "Class of 2016", "Class of 2015", "Class of 2014", "Class of 2013", "Class of 2012"];

const populateClassMap = () => {
    Object.entries(brothers).forEach(([key, value]) => {
        try {
            classMap[value["Class"]].push(key);
        }
        catch {
            classMap[value["Class"]] = [key];
        }
    });
};

const populateYearMap = () => {
    Object.entries(brothers).forEach(([key, value]) => {
        try {
            yearMap[value["Year"]].push(key);
        }
        catch {
            yearMap[value["Year"]] = [key];
        }
    });
};

const populateNameMap = () => {
    Object.entries(brothers).forEach(([key]) => {
        const firstLetter = key.charAt(0).toLowerCase();
        try {
            nameMap[firstLetter].push(key);
        }
        catch {
            nameMap[firstLetter] = [key];
        }
    });
};

populateClassMap();
populateYearMap();
populateNameMap();

export { classMap, yearMap, nameMap, classes, years, brothers, officers };