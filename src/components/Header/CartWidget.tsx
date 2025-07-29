import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";

export function CartWidget() {
  const [total, setTotal] = useState(0);

  return (
    <Link to="/account/:id/cart">
      <img src="" alt="" />
      <p>
        Shopping cart <br />
        {formatPrice(total)}
      </p>
    </Link>
  );
}
