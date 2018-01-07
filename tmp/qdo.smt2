(declare-const x Int)
(assert (and (< x  0 ) (> x  10 )))
(check-sat)
(get-value (x))
