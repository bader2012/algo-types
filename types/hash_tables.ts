class HashTable {
    private table: Map<string, string> = new Map();

    set(key: string, value: string) {
        this.table.set(key, value);
    }

    get(key: string): string | undefined {
        return this.table.get(key);
    }
}

let hashTable = new HashTable();
hashTable.set("name", "Alice");
console.log(hashTable.get("name"));  // Output: Alice