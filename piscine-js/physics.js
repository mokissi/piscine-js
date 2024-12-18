function getAcceleration(obj) {
    const { f, m, Δv, Δt, t, d } = obj;
    if (f !== undefined && m !== undefined) {
      return f / m;
    }
    if (Δv !== undefined && Δt !== undefined) {
      return Δv / Δt;
    }

    if (d !== undefined && t !== undefined) {
      return (2 * d) / (t * t);
    }
    return "impossible";
  }
  