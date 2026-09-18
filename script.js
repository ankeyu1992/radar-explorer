// =========================
// RADAR ANATOMY
// =========================

const anatomyParts = {

    antenna: {
        title: "Antenna",

        description:
            "The antenna transmits electromagnetic waves into the environment and receives the echoes reflected from objects.",

        function:
            "Transmission & Reception",

        role:
            "Sends and receives electromagnetic waves."
    },

    transmitter: {
        title: "Transmitter",

        description:
            "The transmitter generates the radio-frequency energy that the radar sends toward a target.",

        function:
            "Signal Generation",

        role:
            "Produces the electromagnetic signal."
    },

    receiver: {
        title: "Receiver",

        description:
            "The receiver detects the weak signals that return to the radar after reflecting from objects.",

        function:
            "Signal Reception",

        role:
            "Captures and amplifies returning echoes."
    },

    processor: {
        title: "Signal Processor",

        description:
            "The signal processor analyzes received echoes, reduces unwanted noise, and extracts useful information about targets.",

        function:
            "Data Processing",

        role:
            "Turns raw echoes into useful information."
    },

    display: {
        title: "Display",

        description:
            "The display presents processed radar information so that an operator or system can understand the detected environment.",

        function:
            "Information Display",

        role:
            "Presents detected targets and measurements."
    }

};


const anatomyButtons =
    document.querySelectorAll(".anatomy-part");

const anatomyTitle =
    document.getElementById("anatomy-title");

const anatomyDescription =
    document.getElementById("anatomy-description");

const anatomyFunction =
    document.getElementById("anatomy-function");

const anatomyRole =
    document.getElementById("anatomy-role");


anatomyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const part =
            button.getAttribute("data-part");

        const data =
            anatomyParts[part];

        if (!data) return;


        anatomyButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        anatomyTitle.textContent =
            data.title;

        anatomyDescription.textContent =
            data.description;

        anatomyFunction.textContent =
            data.function;

        anatomyRole.textContent =
            data.role;

    });

});
