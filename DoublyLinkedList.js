function DoublyLinkedList() {
    var length = 0;
    var head = null;
    tail = null;
    nodeArray = [];

    var Node = function (element,prev,next) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.tail = function(){
        return tail;
    }

    this.addFirst = function(data){
        if(this.size() === 0){
            head = tail = new Node(data);
            nodeArray.push(head);
        }else{
            head.prev = new Node(data,null,head);
            head = head.prev;
            nodeArray.push(head);
        }
        length++;
    }
    this.addLast = function(data){
        if(this.size() === 0){
            head = tail = new Node(data);
            nodeArray.push(tail);

        }else{
            tail.next = new Node(data,tail,null);
            tail = tail.next;
            nodeArray.push(tail);

        }
        length++;
    }
    this.add =function(data){
        this.addLast(data);
    }
    this.peekFirst = function(){
        if(head === null){
            return null;
        }
        return head.element;
    }
    this.peekLast = function(){
        if(tail  === null){
            return null;
        }
        console.log(tail.element)
        return tail.element;
    }
    this.removeFirst = function () {
        if (this.size === 0) {
            return "List is Empty"
        }
        let data = head.element;
        head = head.next;
        --length;
        if (this.size() === 0) tail = null;
        else head.prev = null;
        return data;
    }

    this.removeLast = function () {
        if (this.size === 0) {
            return "List is Empty"
        }
        let data = tail.element;
        tail = tail.prev;
        --length;
        if (this.size() === 0) head = null;
        else tail.next = null;
        return data;
    }

    this.removeNode = function(node){
        if(node.next == null) return this.removeLast();
        if(node.prev == null) return this.removeFirst();
        let data = node.element;
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.data = null;
        node = node.next = node.prev = null;
        --length;
        return data;
    }
    this.removeAt = function(index){
        if(index < 0  || index > length){
            return "Invalid Position"
        }
        let trav;
        let i;
        if(index < length/2){
            for(i=0,trav=head,i != index; i++){
                trav = trav.next;
            }
        }
    }

    this.printData = function(){
        let data = "["
        let trav = head;
        while (trav != null || undefined){
            data +=`${trav.element},`;
            trav = trav.next;

        }
        data += "]"
        return data.toString();
    }
}





let dll = new DoublyLinkedList();
dll.addFirst("Vignesh");
dll.addFirst("Vigu");
dll.addFirst("Raky");
// console.log(dll.removeFirst());
// console.log(dll.removeLast());
dll.removeNode(nodeArray[1]);
// console.log(dll.peekLast())
// console.log(dll.peekFirst());
console.log(dll.printData());
console.log(nodeArray.length)



//https://www.youtube.com/watch?v=RBSGKlAvoiM
//https://www.youtube.com/watch?v=09_LlHjoEiY
//https://www.youtube.com/watch?v=hoDLCKqEDR4
//https://www.youtube.com/watch?v=t2CEgPsws3U