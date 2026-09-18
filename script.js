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
// =========================
// RADAR APPLICATIONS
// =========================

const applicationData = {

    weather: {
        title: "Weather Radar",

        description:
            "Weather radar detects precipitation and can provide information about the location, intensity, and movement of weather systems.",

        use:
            "Rainfall & Storm Monitoring",

        principle:
            "Reflected signals reveal information about precipitation."
    },

    automotive: {
        title: "Automotive Radar",

        description:
            "Automotive radar uses radio waves to detect objects around vehicles and estimate their distance and relative motion.",

        use:
            "Driver Assistance & Safety",

        principle:
            "Range and Doppler measurements help detect nearby objects."
    },

    aviation: {
        title: "Air Traffic Radar",

        description:
            "Air traffic radar helps detect and track aircraft by measuring their position, distance, and movement.",

        use:
            "Aircraft Detection & Tracking",

        principle:
            "Radar echoes provide information about aircraft position and motion."
    },

    marine: {
        title: "Marine Radar",

        description:
            "Marine radar helps ships detect nearby vessels, coastlines, and other objects, especially when visibility is limited.",

        use:
            "Navigation & Collision Awareness",

        principle:
            "Reflected signals reveal the location of objects around a vessel."
    },

    speed: {
        title: "Speed Radar",

        description:
            "Speed radar measures the motion of a target by analyzing changes in the frequency of the returned signal.",

        use:
            "Speed Measurement",

        principle:
            "The Doppler effect provides information about relative velocity."
    },

    gpr: {
        title: "Ground-Penetrating Radar",

        description:
            "Ground-penetrating radar sends electromagnetic waves into the ground to investigate buried structures and changes in subsurface materials.",

        use:
            "Subsurface Investigation",

        principle:
            "Reflections from underground boundaries reveal subsurface structure."
    },

    sar: {
        title: "Synthetic Aperture Radar",

        description:
            "Synthetic aperture radar combines measurements collected from different positions to create detailed images of Earth's surface.",

        use:
            "Earth Observation",

        principle:
            "Multiple radar measurements can be combined to produce high-resolution imagery."
    },

    space: {
        title: "Space Radar",

        description:
            "Radar instruments carried by satellites can observe Earth's surface and atmosphere, including areas hidden by clouds or darkness.",

        use:
            "Earth Observation",

        principle:
            "Radar can actively illuminate Earth's surface and measure returned signals."
    }

};


const applicationCards =
    document.querySelectorAll(".application-card");

const applicationTitle =
    document.getElementById("application-title");

const applicationDescription =
    document.getElementById("application-description");

const applicationUse =
    document.getElementById("application-use");

const applicationPrinciple =
    document.getElementById("application-principle");


applicationCards.forEach(card => {

    card.addEventListener("click", () => {

        const application =
            card.getAttribute("data-application");

        const data =
            applicationData[application];

        if (!data) return;


        applicationCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");


        applicationTitle.textContent =
            data.title;

        applicationDescription.textContent =
            data.description;

        applicationUse.textContent =
            data.use;

        applicationPrinciple.textContent =
            data.principle;

    });

});
