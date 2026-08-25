@keyframes runningMan {
    0%   { transform: translateY(0) scale(1); }
    50%  { transform: translateY(-10px) scale(1.05); }
    100% { transform: translateY(0) scale(1); }
}
.cell[data-layer="arg"] {
    animation: runningMan 0.6s infinite ease-in-out;
}
