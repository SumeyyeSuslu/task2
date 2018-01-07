(declare-const x Int)
(assert (and (<= x  (- 1 )) (> x  3 )))
(check-sat)
(get-value (x))
