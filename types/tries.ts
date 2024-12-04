class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEndOfWord: boolean = false;
}

class Trie {
    root: TrieNode = new TrieNode();

    insert(word: string) {
        let current = this.root;
        for (let char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isEndOfWord = true;
    }

    search(word: string): boolean {
        let current = this.root;
        for (let char of word) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return current.isEndOfWord;
    }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));  // Output: true
console.log(trie.search("app"));    // Output: false