var regex = "ab*ba";
var nfa = RegexParser.parse(regex);

for (var state in nfa.states) {
  console.group(state);
  for (var transition in nfa.states[state].transitions) {
    var destinations = nfa.states[state].transitions[transition].map(function(item) {
      return item.label;
    }).join(', ');
    console.log(transition + ' : ' + destinations);
  }
  if (nfa.states[state].final) {
    console.log('-- final state');
  }
  console.groupEnd();
}

console.info('a', nfa.accepts('a'));
console.info('abbbba', nfa.accepts('abbbba'));
console.info('aba', nfa.accepts('aba'));