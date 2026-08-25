@keyframes tStep {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(8px); }
    100% { transform: translateX(0); }
}
.cell[data-layer="org"] {
    animation: tStep 0.5s infinite ease-in-out;
}
