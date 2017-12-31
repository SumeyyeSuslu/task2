
(declare-const x Int)
(assert (not (= x  0 )))
(assert (not (= x  1 )))
(assert (not (= x  2 )))
(assert (not undefined ))
(check-sat)
(get-value (x))
