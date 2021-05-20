let allHelpers = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },

    // Returns true if current time is before noon, false otherwise
    shift_change: () => {
        // let currentHour = moment().hour();
        let today = new Date();
        let currentHour = today.getHours();

        if (currentHour >= 0 && currentHour <= 11) {
            return true;
        }

        return false;
    },

    // Used to check whether a dog's activity is carried out
    // Returns true if the activity is done, false otherwise
    isDone: (activity) => {
        if (activity) {
            return true;
        };

        return false;
    },

    // AM shift: If a dog has gotten its potty and walk, return true, false otherwise
    happy_tail_am: (has_walked_am, has_potty_am) => {
        if (has_walked_am && has_potty_am) {
            return true;
        }

        return false;
    },

    // PM shift: If a dog has gotten its potty and walk, return true, false otherwise
    happy_tail_pm: (has_walked_pm, has_potty_pm) => {
        // if dog has_walked AND has_pottied then change status-emoji from sad face to happy face 
        if (has_walked_pm && has_potty_pm) {
            return true;
        };

        return false;
    }
};

module.exports = allHelpers;