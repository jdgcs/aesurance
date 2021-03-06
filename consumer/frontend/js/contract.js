var contractSource = `// THIS IS NOT SECURITY AUDITED
// DO NEVER USE THIS WITHOUT SECURITY AUDIT FIRST

payable contract CreateOracle =
    datatype event = QueryCreated(int)
    record state = {
        source_oracle : oracle(string, string),
        id_query : map(int, oracle_query(string, string)),
        queries: int
      }

    entrypoint get_queries (): int =
      state.queries

    stateful entrypoint init () = 
      let greeter_oracle : oracle(string, string) = register_oracle(5, 500)
      {source_oracle = greeter_oracle,
        id_query = {},
        queries = 0}

    stateful function register_oracle(      						
        qfee : int,     						 //Minimum payment fee
        rttl : int) : oracle(string, string) =   //oracle expiration time blocks
      Oracle.register(Contract.address, qfee, RelativeTTL(rttl))

    stateful entrypoint extend_oracle(ttl : int) : unit =		//oracle expiration time blocks 
      Oracle.extend(state.source_oracle, RelativeTTL(ttl))

    entrypoint get_question(q : oracle_query(string, string)) : string =    //id of query in oracle
      Oracle.get_question(state.source_oracle, q)    

    entrypoint get__answer(q : oracle_query(string, string)) : option(string) =    //id of query in oracle
      Oracle.get_answer(state.source_oracle, q)  

    payable stateful entrypoint create_query(
        q    : string,      				//question
        qfee : int,         				//fee
        qttl : int,         				//last height oracle to post a reply
        rttl : int) : oracle_query(string, string) =  //time stays on the chain
      require(qfee =< Call.value, "insufficient value for qfee")    	//check the fee
      let query : oracle_query(string, string) = Oracle.query(state.source_oracle, q, qfee, RelativeTTL(qttl), RelativeTTL(rttl))
      put(state{queries = state.queries + 1})
      put(state{id_query[state.queries] = query })
      Chain.event(QueryCreated(state.queries))
      query
    
    entrypoint get_query_address(id: int) :oracle_query(string, string) =
      state.id_query[id]

    stateful entrypoint respond(
            q    : oracle_query(string, string),   //id of query in oracle
            r    : string) =  			           //reply
      Oracle.respond(state.source_oracle, q, r)

    
    `

var contractAddress = 'ct_cYDinq1pciSf4gsufcrxYSihqGgoepuWGJD74XCyfrS29t8xH'