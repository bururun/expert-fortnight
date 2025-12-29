// Utility functions for TaskScheduler

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 11
function newFunction11() {
    return 11;
}

module.exports = { formatData, validateInput };


// Utility functions for TaskScheduler

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 14
function newFunction14() {
    return 14;
}

module.exports = { formatData, validateInput };
