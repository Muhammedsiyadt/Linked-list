

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.next = null
        }
        this.size++
    }

    insert(index, data) {
        const node = new Node(data)
        if (index < 0 || index > this.size) {
            console.log('Invalid index...');
        }
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
        this.size++
    }

    removeFirst() {
        this.head = this.head.next
        this.size--
    }

    removeLast() {
        let current = this.head
        let prev = null
        while (current.next) {
            prev = current
            current = current.next
        }
        prev.next = null
        this.size--
    }

    removeByIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index..');
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let prev = null
            for (let i = 0; i < index - 1; i++) {
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
        this.size--
    }

    RemoveByGivingValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.data === value) { 
            this.head = this.head.next
            this.size--
            return value
        } else {
            let current = this.head
            while (current.next && current.next.data != value) {
                current = current.data
            }
            if (current.next) {
                const removedItem = current.next
                current.next = removedItem.next
                this.size--
                return value
            }
            console.log('No item....');
        }
    }

    RemoveDuplicates() {
        if (this.isEmpty()) {
            console.log('Empty...');
        } else {
            let current = this.head
            while (current.next) {
                if (current.data === current.next.data) {
                    current.next = current.next.next
                } else {
                    current = current.next
                }
            }
        }
        this.size--
    }

    FindBiggestvalue() {
        if (this.isEmpty()) {
            console.log('Empty...!');
        } else {
            let current = this.head
            let max = this.head.data

            while (current) {
                if (current.data > max) {
                    max = current.data
                }
                current = current.next

            }
            return max
        }
    }

    FindLowest() {
        if (this.isEmpty()) {
            console.log('Empty....');
        } else {
            let current = this.head
            let low = this.head.data
            while (current) {
                if (current.data < low) {
                    low = current.data
                }
                current = current.next
            }
            return low
        }
    }

    findMiddle() {
        let current = this.head
        let prev = this.head
        while (current && current.next) {
            prev = prev.next
            current = current.next.next
        }
        return prev.data
    }

    findLast() {
        if (this.isEmpty()) {
            return null
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            return current.data
        }
    }

    findFirst() {
        if (this.isEmpty()) {
            return null
        } else {
            return this.head.data
        }
    }

    ReversePrint() {
        if (this.isEmpty()) {
            console.log('There is no list...!');
        } else {
            let prev = null
            let current = this.head
            while (current) {
                const nextNode = current.next
                current.next = prev
                prev = current
                current = nextNode
            }
            this.head = prev
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty....');
        } else {
            let current = this.head
            while (current) {
                console.log(current.data);
                current = current.next
            }
        }
    }


}

const list = new linkedList()
// list.prepend(10)
list.append(10)
list.append(50)
list.append(20)
list.append(20)
list.append(30)
list.append(60)
list.append(80)
list.append(40)
// console.log(list.getSize());
// list.insert(1, 111)
// list.removeFirst()
// list.removeLast()
// list.removeByIndex(2)
// list.RemoveByGivingValue(20)
// console.log("Size is :) ",list.getSize());
// console.log('Before reversing....');
// list.print()
// console.log('After reverse..');
// list.ReversePrint() 
console.log('BEFORE >>>>>>>');
list.print()

// console.log('Max');
// const max = list.FindBiggestvalue()
// console.log(max);
// console.log('Low......');
// const low = list.FindLowest()
// console.log(low);

// console.log('middle..');
// console.log(list.findMiddle()); 

// console.log('Last one ..');
// console.log(list.findLast());

// console.log('First one ..');
// console.log(list.findFirst());

console.log('AFTER >>>>>>>>');
list.RemoveDuplicates()
list.print()

