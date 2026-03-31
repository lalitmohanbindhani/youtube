Debouncing:

typing very slow - the difference bettween the key pressed is very high = 200 ms
typing very fast - the difference bettween the key pressed is very low = 50 ms

Performance:

ipone pro max 14 _ 1000 = 14000
with debouncing 3 _ 1000 = 3000

to give a better user exprience and they also want to have a very perfermant call, this concept is called as debouncing

- if difference between 2 key stroke is less then 200ms then i should not call thr api, insted i should decline the api
- if difference between 2 key stroke is greater then 200ms then i should call thr api and i should showthe api

INPUT SEARCH API CALL
make an api call everytime after evert key pressed
but if the diffetence between two api call is < 200ms
decline the api call
key - i
render the component
useEffetc() is called
start timer => make api call after 200ms

key - ip
destroy the component and it will call useEffct ret
re-render the component
useEffetc() is called
start timer => make api call after 200ms

The search is using live api
the search is using debouncing
the search is using caching
