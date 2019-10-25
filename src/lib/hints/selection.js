import { REMOVE_LAST, ADD_TO_LAST, MOVE_UP, MOVE_DOWN } from './hints-util';

class Selection {
    constructor(fragments) {
        this.fragments = fragments;
        this.start = 0,
            this.end = Object.values(fragments)[0].stmtIds.length - 1;
    }

    actionApplicableFor(action) {
        if (action === ADD_TO_LAST) {
            return this.end < Object.values(this.fragments)[0].stmtIds.length - 1;
        }
        else if (action === REMOVE_LAST) {
            return this.end > this.start;
        }
        else if (action === MOVE_UP) {
            return this.start > 0;
        }
        else if (action === MOVE_DOWN) {
            return this.end < Object.values(this.fragments)[0].stmtIds.length - 1;
        }

        return false;
    }

    removeLast() {
        if (this.end > this.start) {
            this.end = this.end - 1;
        }
    }

    addToLast() {
        if (this.end < Object.values(this.fragments)[0].stmtIds.length - 1) {
            this.end = this.end + 1;
        }
    }

    moveDown() {
        if (this.end < Object.values(this.fragments)[0].stmtIds.length - 1) {
            this.start = this.start + 1;
            this.end = this.end + 1;
        }
    }

    moveUp() {
        if (this.start > 0) {
            this.start = this.start - 1;
            this.end = this.end - 1;
        }
    }

    apply(action) {
        switch (action) {
            case REMOVE_LAST: {
                this.removeLast();
                break;
            }
            case ADD_TO_LAST: {
                this.addToLast();
                break;
            }
            case MOVE_UP: {
                this.moveUp();
                break;
            }
            case MOVE_DOWN: {
                this.moveDown();
                break;
            }
        }
    }

    getSelectedFragments() {
        const outputFragments = {};
        Object.keys(this.fragments).forEach(k => {
            outputFragments[k] = { stmtIds: this.fragments[k].stmtIds.slice(this.start, this.end + 1) };
        });
        return outputFragments;
    }
}

export default Selection;