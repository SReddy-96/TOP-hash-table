// Hash set, Just stores the keys

// node
class Node {
  constructor(key, nextNode = null) {
    this.key = key;
    this.nextNode = nextNode;
  }
}

// hash map class
class HashMap {
  constructor(size = 0, loadFactor = 0.75, initialCapacity = 16) {
    this.buckets = new Array(initialCapacity).fill(null);
    this.size = size;
    this.loadFactor = loadFactor;
  }
  //  hash function
  hash(key) {
    let hashCode = 0;

    const primeNumber = 769;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  // resize the buckets
  _resize() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(oldBuckets.length * 2).fill(null);
    this.size = 0;

    //   iterate old buckets to new
    oldBuckets.forEach((bucket) => {
      let current = bucket;
      while (current != null) {
        this.set(current.key);
        current = current.nextNode;
      }
    });
  }

  //set(key), add a node, if already there then overwrite
  set(key) {
    const index = this.hash(key);
    const buckets = this.buckets;
    const newNode = new Node(key);

    if (!this.has(key)) {
      //   resize if array not big enough and key not in the hash map.
      if (this.size / this.buckets.length >= this.loadFactor) {
        this._resize();
      }
    }
    //   check if null
    if (buckets[index] === null) {
      buckets[index] = newNode;
      this.size++;

      // check if not null and if key exists.
    } else if (buckets[index] != null) {
      let current = buckets[index];
      if (current.key === key) {
        newNode.nextNode = current.nextNode;
        console.log("Node has been updated!");
        return (current = newNode);
      }
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
      this.size++;

      // show a collision
    } else {
      return console.log("collision");
    }
  }

  // get(key), use key to get node return null if none
  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let bucket = this.buckets[index];

    if (!bucket) {
      return false;
    } else if (bucket.key === key) {
      return console.log(bucket);
    }

    while (bucket.nextNode != null) {
      bucket = bucket.nextNode;
      if (bucket.key === key) {
        return console.log(bucket);
      }
    }
    return false;
  }

  // has(key) return true or false if node is there
  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let bucket = this.buckets[index];

    if (!bucket) {
      return false;
    } else if (bucket.key === key) {
      return true;
    }

    while (bucket.nextNode != null) {
      bucket = bucket.nextNode;
      if (bucket.key === key) {
        return true;
      }
    }
    return false;
  }

  // remove(key), removes the node then returns true if it works and false if node isn't there
  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    //   set a previous to iterate through
    let bucket = this.buckets[index];
    let previousBucket;

    //   iterate over nodes only if not null and not the key
    while (bucket !== null && bucket.key !== key) {
      previousBucket = bucket;
      bucket = bucket.nextNode;
    }

    // return if empty
    if (!bucket) {
      return false;

      // return if first node
    } else if (!previousBucket) {
      this.size--;
      return (this.buckets[index] = bucket.nextNode);

      // if not first one change the previous to the nextNode, if null or not.
    } else {
      this.size--;
      previousBucket.nextNode = bucket.nextNode;
    }
  }

  // length(), return the number of stored keys in the hash map
  length() {
    return console.log(this.size);
  }

  // clear(), removes all nodes in hash map
  clear() {
    const initialCapacity = 16;
    this.buckets = new Array(initialCapacity).fill(null);
    this.size = 0;
  }

  // keys(), returns an array containing all keys
  keys() {
    const buckets = this.buckets;
    const keyArray = [];

    buckets.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        keyArray.push(current.key);
        current = current.nextNode;
      }
    });

    return console.log(keyArray);
  }

  // entries(), returns an array containing key value pairs. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    const buckets = this.buckets;
    const entiresArray = [];

    buckets.forEach((bucket) => {
      let current = bucket;
      if (!current) {
        return;
      }
      let nodes = [];
      while (current !== null) {
        let node = [current.key];
        nodes.push(node);
        current = current.nextNode;
      }
      entiresArray.push(nodes);
    });

    return console.log(entiresArray);
  }
}


// testing all methods
const test = new HashMap();

test.set("apple");
test.set("banana");
test.set("carrot");
test.set("dog");
test.set("elephant");
test.set("frog");
test.set("grape");
test.set("hat");
test.set("ice cream");
test.set("jacket");
test.set("kite");
test.set("lion");
test.set("moon");

test.set("ice cream");
test.set("elephant");

test.get("ice cream");
test.get("hello");

console.log(test.has("banana"));
console.log(test.has("hello"));

test.remove("jacket");
test.remove("hello");

test.length();

test.keys();

test.entries();

test.clear()

console.log(test);
