
(declare-const x Int)
(assert (not (= x  (- 1 ))))
(assert (not (= x  3 )))
(assert (not (= x  4 )))
(assert (not undefined ))
(check-sat)
(get-value (x))
