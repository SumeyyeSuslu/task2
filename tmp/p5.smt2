(declare-const x Int)
(assert (not (= x  3 )))
(check-sat)
(get-value (x))
