// https://www.codewars.com/kata/581e50555f59405743001813/train/javascript
function anyMatch(head, p) {
  return head ? p(head.data) || anyMatch(head.next, p) : false;
}

function allMatch(head, p) {
  return head ? p(head.data) && allMatch(head.next, p) : true;
}
//learnt a couple of things about LinkedLists. I learned they are a way of storing data with the advantage of being easy to add/insert or delete data in any chain. They are not good to get individual elements tho.
//https://youtu.be/9YddVVsdG5A?si=s3YlhlRQ6IeZWF0O
class LinkedList {
  constructor() {
    let length = 0;
    let head = null;

    class Node {
      constructor(element) {
        this.element = element;
        this.next = null;
      }
    }
    this.getHead = function () {
      return head;
    };
    this.getTail = function () {
      let currentNode = head;
      if (currentNode) {
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        return currentNode;
      }
    };
    this.size = function () {
      return length;
    };
    this.add = function (element) {
      let node = new Node(element);
      if (head === null) {
        head = node;
      } else {
        let currentNode = head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
      length++;
    };
    this.remove = function (element) {
      let currentNode = head;
      let previousNode;
      if (currentNode.element === element) {
        head = currentNode.next;
      } else {
        while (currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      length--;
    };
  }
}
let family = new LinkedList();
console.log(family.size());
family.add("aba");
family.add("ema");
family.add("kerry");
family.add("joy");

console.log(family.size());
console.log(family.getHead());
console.log(family.getTail());
