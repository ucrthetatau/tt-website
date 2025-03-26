import { firestore } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const brotherData = await getDocs(collection(firestore, "members"));
const officerData = await getDocs(collection(firestore, "officers"));
let brothers = {}
let officers = {}
let classMap = {}
let yearMap = {}
let nameMap = {}
let classes = ["Psi","Chi","Phi", "Upsilon", "Tau", "Sigma", "Rho", "Pi", "Omicron", "Xi", "Nu", "Mu", "Lambda", "Kappa", "Iota", "Theta", "Eta", "Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"]
let years = ["Class of 2028", "Class of 2027", "Class of 2026", "Class of 2025", "Class of 2024", "Class of 2023", "Class of 2022", "Class of 2021", "Class of 2020", "Class of 2019", "Class of 2018", "Class of 2017", "Class of 2016", "Class of 2015", "Class of 2014", "Class of 2013", "Class of 2012"]

const getBrothers = async () => {
    try {
        brotherData.forEach((doc) => {
            brothers[doc.id] = doc.data()
        });
    } catch(e) {
        console.error(e);
    }    
}

const getOfficers = async () => {
    try {
        officerData.forEach((doc) => {
            officers[doc.id] = doc.data()
        });
    } catch(e) {
        console.error(e);
    }    
}

const populateClassMap = () => {
    Object.entries(brothers).forEach(([key,value]) => {
        try {
            classMap[value["Class"]].push(key)
        }
        catch {
            classMap[value["Class"]] = [key]
        }
    })
}

const populateYearMap = () => {
    Object.entries(brothers).forEach(([key,value]) => {
        try {
            yearMap[value["GraduatingClass"]].push(key)
        }
        catch {
            yearMap[value["GraduatingClass"]] = [key]
        }
    })
}

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
}

getBrothers()
getOfficers()
populateClassMap()
populateYearMap()
populateNameMap()

export { brothers, officers, classes, classMap, yearMap, nameMap, years };