(declare-const x Int)
(assert undefined(= x  3 ))
(check-sat)
(get-value (x))
