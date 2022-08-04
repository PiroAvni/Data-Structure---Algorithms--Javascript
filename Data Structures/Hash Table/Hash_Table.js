console.log('**** HASH TABLE ****');

class HashTable {
    constructor(size){
      this.data = new Array(size); // create an emtpy array to store in memeory
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      //console.log(this.data)
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            console.log("current bucket:",currentBucket[i][i],currentBucket[i][1])
            return currentBucket[i][1]
          }
        }
      } // 0(1)
      return undefined;
    }
    keys(){
        const keysArray =[];
        for(let i=0; i < this.data.length; i++){
            //console.log(this.data)
            if(this.data[i]){
                console.log('Data Key:',this.data[i][0][0])
                keysArray.push(this.data[i][0][0])
            }
        }
        console.log("key values =",keysArray)
        return keysArray;
    }
    values(){
        const valuesArray =[];
        for(let i=0; i < this.data.length; i++){
            //console.log(this.data)
            if(this.data[i]){
                console.log('data:',this.data[i][0][1])
                valuesArray.push(this.data[i][0][1])
            }
        }
        console.log('VALUE ARRAYS =',valuesArray)
        return valuesArray;
    }
    remove(key) {
      const address = this._hash(key);
  
      if (this.data[address] && this.data[address].length) {
        this.data[address] = [];
        this.size--;
        return true;
      } else {
        return false;
      }
    }
  }

  const myHashTable = new HashTable(50); // MEMORY SIZE 50
  myHashTable.set('grapes', 10000);
  myHashTable.get('grapes');
  myHashTable.get('pears');
 // myHashTable.get('apples')
  myHashTable.set('apples', 54)
  myHashTable.set('oranges', 5)
  myHashTable.set('pears', 28)
  myHashTable.get('apples')
  myHashTable.keys();
  myHashTable.values();
  console.log(myHashTable.remove('apples'));
  myHashTable.keys();
  myHashTable.values();
 
