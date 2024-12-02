function getStudentGrade(marks){
    if (typeof marks !== "number" || marks < 0 || marks > 100){
        return "Invalid input. Marks must be a number between 0 and 100.";
    }

    if (marks > 79){
       return 'A';

    }else if (marks >= 60){
        return 'B';

    }else if (marks >= 49){
        return 'C';

    }else if (marks >= 40){
        return 'D';

    }else{
        return 'E';
    }
}