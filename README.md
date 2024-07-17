# Hash Tables Implementation - The Odin Project

## Project Overview

This project involves implementing custom Hash Map and Hash Set data structures in JavaScript. The goal is to create efficient hash-based data structures that can store and retrieve data quickly, while handling collisions effectively.

## Key Features

- Custom hash function for optimal bucket distribution
- Collision handling using linked lists
- Separate implementations for Hash Map (key-value pairs) and Hash Set (unique keys)
- Dynamic resizing to maintain performance as the data structure grows

## Core Functionalities

Both Hash Map and Hash Set implementations include the following methods:

- `set(key, value)`: Add or update a key-value pair (Hash Map only)
- `has(key)`: Check if a key exists
- `get(key)`: Retrieve the value associated with a key (Hash Map only)
- `remove(key)`: Delete a key-value pair
- `length()`: Return the number of stored elements
- `clear()`: Remove all entries
- `keys()`: Return an array of all keys
- `values()`: Return an array of all values (Hash Map only)
- `entries()`: Return an array of key-value pairs (Hash Map only)

## Technical Highlights

- Prime number-based hash function to minimize collisions
- Use of linked lists for efficient collision resolution
- Constant time O(1) complexity for basic operations
- Automatic resizing based on load factor to maintain performance

## Challenges and Solutions

1. **Efficient Hashing**: Implemented a hash function using prime numbers and modulo operation to distribute keys evenly across buckets.
2. **Collision Handling**: Utilized linked lists within buckets to manage multiple entries with the same hash.
3. **Dynamic Resizing**: Implemented a `_resize` method to increase bucket count when the load factor exceeds a threshold, maintaining performance as the data structure grows.

## Skills Developed

- Deep understanding of hash table internals
- Improved problem-solving skills in handling edge cases and collisions
- Enhanced proficiency in JavaScript, particularly with array operations and object-oriented programming

## Reflections

This project provided valuable insights into the inner workings of hash-based data structures. It highlighted the importance of efficient hashing and collision resolution in maintaining constant-time operations. The implementation of dynamic resizing demonstrated the trade-off between memory usage and performance in data structure design.

## How to Use

1. Clone the repository:

   ```
   git clone https://github.com/SReddy-96/TOP-hash-table.git
   ```

2. Navigate to the project directory:

   ```
   cd hash-table
   ```

3. Run the script (if using Node.js):
   ```
   node index.js
   ```

Feel free to explore the code and test the various methods implemented in this Hash Table project!
