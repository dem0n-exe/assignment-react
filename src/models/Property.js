export default class Property {
    constructor(name, description, size) {
        this.name = name;
        this.description = description;
        this.size = size;
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getSize() {
        return this.size;
    }

    setName(name) {
        this.name = name
    }
    setDescription(description) {
        this.description = description;
    }
    setSize(size) {
        this.size = size;
    }
}