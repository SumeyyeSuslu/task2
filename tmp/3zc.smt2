(declare-const x Int)
(assert (not (and (< x  0 ) (> x  (- 2 )))))
(check-sat)
(get-value (x))
